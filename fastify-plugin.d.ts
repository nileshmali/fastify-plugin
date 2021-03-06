/// <reference types="fastify" />

import * as fastify from 'fastify';

/**
 * This function does three things for you:
 *   1. Add the `skip-override` hidden property
 *   2. Check bare-minimum version of Fastify
 *   3. Pass some custom metadata of the plugin to Fastify
 * @param fn Fastify plugin function
 * @param options Optional plugin options
 * @param next The `next` callback is not available when using `async`/`await`. If you do invoke a `next` callback in this situation unexpected behavior may occur.
 */
declare function fastifyPlugin<HttpServer, HttpRequest, HttpResponse, T>(
  fn: fastify.Plugin<HttpServer, HttpRequest, HttpResponse, T>,
  options?: fastifyPlugin.PluginOptions | string,
  next?: fastifyPlugin.nextCallback
): fastify.Plugin<HttpServer, HttpRequest, HttpResponse, T>;

declare namespace fastifyPlugin {
  type nextCallback = () => void;
  interface PluginOptions {
    /** Bare-minimum version of Fastify for your plugin, just add the semver range that you need. */
    fastify?: string,
    /** Decorator dependencies for this plugin */
    decorators?: {
      fastify?: string[],
      reply?: string[]
    },
    /** The plugin dependencies */
    dependencies?: string[]
  }
}

export = fastifyPlugin;