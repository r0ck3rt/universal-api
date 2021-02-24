import { CanvasContext, Options } from '../types';

export const createContext = function(canvasOptions: Options): Promise<CanvasContext> {
  const { canvasId } = canvasOptions;
  return new Promise((resolve) => {
    const context = my.createCanvasContext(canvasId);
    Object.defineProperty(context, 'fillStyle', {
      get() {
        return context.setFillStyle;
      },
      set(value) {
        context.setFillStyle(value);
      },
    });
    resolve(context);
  });
};

export default { createContext };
