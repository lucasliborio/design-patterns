export interface Observer {
  update(): void
  type: 'message' | "notification"
}