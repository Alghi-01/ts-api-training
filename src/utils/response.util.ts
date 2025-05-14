// Generic dengan constraint: T bisa berupa tipe apapun atau undefined/null
export const createResponse = <T extends object | null>(
  success: boolean,
  message: string,
  data?: T
) => ({
  success,
  message,
  data,
});
