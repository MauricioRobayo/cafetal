import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';
import slugify from 'slugify';

interface NewArticleSchemaOptions {
  title: string;
  excerpt?: string;
  image?: string;
  source?: string;
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
      slug: slugify(names(schema.title).fileName, { lower: true }),
      image: schema.image || '',
      creationDate: new Date().toISOString(),
      source: schema.source || '',
    }
  );

  await formatFiles(host);
}
