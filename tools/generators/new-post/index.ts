import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';
import slugify from 'slugify';

interface NewPostsSchemaOptions {
  title: string;
  excerpt?: string;
  image?: string;
}

export default async function (host: Tree, schema: NewPostsSchemaOptions) {
  generateFiles(
    // virtual file system
    host,

    // the location where the template files are
    joinPathFragments(__dirname, './files'),

    // where the files should be generated
    './posts',

    // the variables to be substituted in the template
    {
      title: schema.title,
      excerpt: schema.excerpt || '',
      slug: slugify(names(schema.title).fileName, { lower: true }),
      image: schema.image || '',
      creationDate: new Date().toISOString(),
    }
  );

  await formatFiles(host);
}
