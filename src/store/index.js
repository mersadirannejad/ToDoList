import { init } from "@rematch/core";
import { TodoModel } from "./todo";

export const store = init({
  models: {
    TodoModel,
  },
});
