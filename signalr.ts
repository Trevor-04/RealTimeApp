import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("/chatHub")
  .build();

connection.on("ReceiveMessage", (user: string, message: string) => {
  console.log(`${user}: ${message}`);
});

await connection.start();
await connection.invoke("SendMessage", "Trevor", "Hello, world!");
