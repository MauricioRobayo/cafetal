import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';

interface NewArticleSchemaOptions {
  title: string;
  excerpt?: string;
  image?: string;
}

export default async function (host: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(
    // virtual file system
    host,

    // the location where the template files are
    joinPathFragments(__dirname, './files'),

    // where the files should be generated
    './articles',

    // the variables to be substituted in the template
    {
      title: schema.title,
      excerpt: schema.excerpt || '',
      normalizedTitle: names(schema.title).fileName,
      image: schema.image || '',
      creationDate: new Date().toISOString(),
    }
  );

  await formatFiles(host);
}
