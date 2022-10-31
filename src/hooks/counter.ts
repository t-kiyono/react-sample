import { RootContext } from "pages/LearnContext";

export function useCounter(ctx: RootContext, i: number) {
  ctx.setRootState({
    ...ctx.rootState,
    x: ctx.rootState.x + 1,
    y: ctx.rootState.y + 1,
  });
}
