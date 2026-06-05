import type { FormEvent, KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import "./InteractiveTerminal.css";
type TerminalLineKind = "boot" | "command" | "output" | "error" | "system";

type TerminalLine = {
  id: string;
  kind: TerminalLineKind;
  text: string;
};

const BOOT_SEQUENCE = [
  "Initializing KING NARMAR secure shell...",
  "Loading royal hacker interface...",
  "Connecting to the kingdom core...",
  "Scanning services matrix...",
  "Access granted. Welcome, visitor.",
];

function createTerminalLine(
  kind: TerminalLineKind,
  text: string,
): TerminalLine {
  return {
    id: `${Date.now()}-${Math.random()}`,
    kind,
    text,
  };
}

function getCommandOutput(command: string): TerminalLine[] {
  switch (command) {
    case "help":
      return [
        createTerminalLine("output", "Available commands:"),
        createTerminalLine("output", "help      - Show available commands"),
        createTerminalLine("output", "services  - View KING NARMAR services"),
        createTerminalLine("output", "projects  - View featured project types"),
        createTerminalLine("output", "contact   - View contact options"),
        createTerminalLine("output", "clear     - Clear terminal output"),
      ];

    case "services":
      return [
        createTerminalLine("output", "KING NARMAR services:"),
        createTerminalLine("output", "01. Custom business systems"),
        createTerminalLine("output", "02. Inventory and warehouse automation"),
        createTerminalLine("output", "03. Dashboards and operational reports"),
        createTerminalLine("output", "04. Excel / VBA / workflow automation"),
        createTerminalLine("output", "05. Interactive web experiences"),
      ];

    case "projects":
      return [
        createTerminalLine("output", "Featured project directions:"),
        createTerminalLine(
          "output",
          "M.I.N.A System  - Materials Inventory Navigation Assistant",
        ),
        createTerminalLine(
          "output",
          "Smart dashboards - Data turned into decisions",
        ),
        createTerminalLine(
          "output",
          "3D websites      - Brands that feel alive",
        ),
      ];

    case "contact":
      return [
        createTerminalLine("output", "Contact channels:"),
        createTerminalLine("output", "GitHub: https://github.com/KingNarmar"),
        createTerminalLine("output", "LinkedIn: Coming soon"),
        createTerminalLine("output", "Email: Coming soon"),
      ];

    case "narmar":
      return [
        createTerminalLine("system", "CROWN PROTOCOL UNLOCKED."),
        createTerminalLine("output", "You found the hidden NARMAR command."),
        createTerminalLine(
          "output",
          "NARMAR is not just a name. It is the command center for systems, automation, and digital kingdoms.",
        ),
        createTerminalLine("output", "Mission: Build systems. Rule the chaos."),
      ];
    default:
      return [
        createTerminalLine(
          "error",
          `Command not found: "${command}". Type "help" to see available commands.`,
        ),
      ];
  }
}

export function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const bootTimers = BOOT_SEQUENCE.map((line, index) =>
      window.setTimeout(() => {
        setTerminalLines((currentLines) => [
          ...currentLines,
          createTerminalLine("boot", line),
        ]);
      }, index * 420),
    );

    const readyTimer = window.setTimeout(
      () => {
        setTerminalLines((currentLines) => [
          ...currentLines,
          createTerminalLine("system", 'Type "help" to explore the kingdom.'),
        ]);

        inputRef.current?.focus();
      },
      BOOT_SEQUENCE.length * 420 + 120,
    );

    return () => {
      bootTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(readyTimer);
    };
  }, [isOpen]);

  useEffect(() => {
    terminalBodyRef.current?.scrollTo({
      top: terminalBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [terminalLines]);

  function openTerminal() {
    setInputValue("");
    setHistoryIndex(null);
    setTerminalLines([]);
    setIsOpen(true);
  }

  function closeTerminal() {
    setIsOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanCommand = inputValue.trim().toLowerCase();

    if (!cleanCommand) return;

    setInputValue("");
    setHistoryIndex(null);
    setCommandHistory((currentHistory) => [...currentHistory, cleanCommand]);

    if (cleanCommand === "clear") {
      setTerminalLines([
        createTerminalLine(
          "system",
          'Terminal cleared. Type "help" to begin again.',
        ),
      ]);
      return;
    }

    setTerminalLines((currentLines) => [
      ...currentLines,
      createTerminalLine("command", `visitor@king-narmar:~$ ${cleanCommand}`),
      ...getCommandOutput(cleanCommand),
    ]);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      closeTerminal();
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) return;

      const nextIndex =
        historyIndex === null
          ? commandHistory.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(nextIndex);
      setInputValue(commandHistory[nextIndex]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex === null) return;

      const nextIndex = historyIndex + 1;

      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(null);
        setInputValue("");
        return;
      }

      setHistoryIndex(nextIndex);
      setInputValue(commandHistory[nextIndex]);
    }
  }

  return (
    <>
      <button
        className="btn btn-secondary terminal-launch-button"
        type="button"
        onClick={openTerminal}
      >
        <span className="terminal-launch-status" aria-hidden="true" />

        <span className="terminal-launch-content">
          <span className="terminal-launch-label">Secret Royal Access</span>
          <span className="terminal-launch-command">Open Terminal</span>
        </span>
      </button>

      {isOpen ? (
        <div className="terminal-overlay" onClick={closeTerminal}>
          <section
            className="terminal-modal glass-panel glass-panel-blue"
            role="dialog"
            aria-modal="true"
            aria-labelledby="terminal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="terminal-header">
              <div>
                <p className="terminal-eyebrow">Royal Access Console</p>
                <h2 id="terminal-title">KING NARMAR Terminal</h2>
              </div>

              <button
                className="terminal-close-button"
                type="button"
                aria-label="Close terminal"
                onClick={closeTerminal}
              >
                ×
              </button>
            </header>

            <div
              className="terminal-body"
              ref={terminalBodyRef}
              aria-live="polite"
            >
              {terminalLines.map((line) => (
                <p
                  className={`terminal-line terminal-line-${line.kind}`}
                  key={line.id}
                >
                  {line.text}
                </p>
              ))}
            </div>

            <form className="terminal-form" onSubmit={handleSubmit}>
              <label className="terminal-prompt" htmlFor="terminal-command">
                visitor@king-narmar:~$
              </label>

              <input
                id="terminal-command"
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck="false"
                aria-label="Terminal command"
              />
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
