// Import required symbols
const { Resource } = require('@opentelemetry/resources');
const { SimpleSpanProcessor, ConsoleSpanExporter } = require ("@opentelemetry/sdk-trace-base");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { HttpInstrumentation } = require ('@opentelemetry/instrumentation-http');
const { ExpressInstrumentation } = require ('@opentelemetry/instrumentation-express');
// **DELETE IF SETTING UP A GATEWAY, UNCOMMENT OTHERWISE**
// const { GraphQLInstrumentation } = require ('@opentelemetry/instrumentation-graphql');

// Register server-related instrumentation
registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation(),
    new ExpressInstrumentation(),
    // **DELETE IF SETTING UP A GATEWAY, UNCOMMENT OTHERWISE**
    //new GraphQLInstrumentation()
  ]
});

// Initialize provider and identify this particular service
// (in this case, we're implementing a federated gateway)
const provider = new NodeTracerProvider({
  resource: Resource.default().merge(new Resource({
    // Replace with any string to identify this service in your system
    "service.name": "gateway",
  })),
});

// Configure a test exporter to print all traces to the console
const consoleExporter = new ConsoleSpanExporter();
provider.addSpanProcessor(
  new SimpleSpanProcessor(consoleExporter)
);

// Register the provider to begin tracing
provider.register();