import { objectType, queryType, makeSchema } from 'nexus';

const Questionnaire = objectType({
  name: 'Questionnaire',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.created();
    t.model.updated();
    t.model.pages();
    t.model.users();
    t.model.results();
  },
});

const Page = objectType({
  name: 'Page',
  definition(t) {
    t.model.id();
    t.model.order();
    t.model.answers();
  },
});

// Define other types similarly...

const Query = queryType({
  definition(t) {
    // Define your queries here...
  },
});

export const schema = makeSchema({
  types: [Query, Questionnaire, Page], // Add other types here...
});
