export default interface Action<
  T extends string,
  P extends object | undefined = undefined
  > {
  type: T;
  payload: P;
}
