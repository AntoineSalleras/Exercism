export function hey(message: unknown):  string {
   if (typeof message !== "string") {
    return "Whatever.";
  }

  const isYelling = /[a-zA-Z]/.test(message) && message.toUpperCase() === message;
  const isQuestion = message.trim().endsWith("?");

  switch (true) {
    case message.trim() === "":
      return "Fine. Be that way!";
    case isYelling && isQuestion:
      return "Calm down, I know what I'm doing!";
    case isYelling:
      return "Whoa, chill out!";
    case isQuestion:
      return "Sure.";
    default:
      return "Whatever.";
  }
}
