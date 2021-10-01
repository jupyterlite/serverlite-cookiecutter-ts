import {
  JupyterLiteServer,
  JupyterLiteServerPlugin
} from '@jupyterlite/server';

/**
 * Initialization data for the {{ cookiecutter.labextension_name }} extension.
 */
const plugin: JupyterLiteServerPlugin<void> = {
  id: '{{ cookiecutter.labextension_name }}:plugin',
  autoStart: true,
  activate: (app: JupyterLiteServer) => {
    console.log('JupyterLite server extension {{ cookiecutter.labextension_name }} is activated!');
  }
};

export default plugin;
