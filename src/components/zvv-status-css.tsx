import "../styles/zvv-styles.css"

type StatusType = "operational" | "degraded" | "partial_outage" | "major_outage" | "maintenance"

interface ZVVStatusProps {
  type: StatusType
}

export function ZVVStatus({ type }: ZVVStatusProps) {
  const statusConfig = {
    operational: {
      title: "Alle Dienste verfügbar",
      message: "Alle ZVV-Dienste sind aktuell uneingeschränkt verfügbar. Wir wünschen Ihnen eine gute Fahrt.",
      timestamp: "Stand: 07.05.2025, 10:00 Uhr",
    },
    degraded: {
      title: "SwissPass-Login nicht möglich",
      message:
        "Wegen einer technischen Störung beim Anbieter swisspass.ch ist der Zugriff auf das SwissPass-Login bis auf Weiteres nicht möglich. Wir bitten Sie um Entschuldigung.",
      timestamp: "Stand: 07.05.2025, 10:00 Uhr",
    },
    partial_outage: {
      title: "Zahlung mit Reka-Card nicht möglich",
      message:
        "Wegen einer technischen Störung beim Zahlungsmittelanbieter ist die Zahlung mit Reka-Card zurzeit nicht möglich. Wir bitten Sie um Entschuldigung.",
      timestamp: "Stand: 07.05.2025, 10:00 Uhr",
    },
    major_outage: {
      title: "Ticketshop ausser Betrieb",
      message:
        "Wegen einer technischen Störung funktioniert der ZVV-Ticketshop zurzeit nicht. Wir bitten Sie um Entschuldigung.",
      timestamp: "Stand: 07.05.2025, 10:00 Uhr",
    },
    maintenance: {
      title: "Kundendienst ZVV-Contact nicht erreichbar",
      message:
        'Wegen einer technischen Störung ist der Kundendienst bis auf Weiteres nicht erreichbar. Wir bitten Sie um Entschuldigung. Für weitere Informationen klicken sie bitte <a href="https://www.zvv.ch/zvv/de/allgemeine-seiten/situation/contact.html">hier</a>.',
      timestamp: "Stand: 07.05.2025, 10:00 Uhr",
    },
  }

  const { title, message, timestamp } = statusConfig[type]
  const getNotificationClass = (type: StatusType) => {
    switch (type) {
      case "operational":
        return "zvv-status-notification--operational"
      case "degraded":
        return "zvv-status-notification--degraded"
      case "partial_outage":
        return "zvv-status-notification--partial"
      case "major_outage":
        return "zvv-status-notification--major"
      case "maintenance":
        return "zvv-status-notification--maintenance"
    }
  }

  const notificationClass = getNotificationClass(type)

  return (
    <div className={`zvv-status-notification ${notificationClass}`}>
      <div className="zvv-status-content">
        <h3 className="zvv-status-title">{title}</h3>
        <p className="zvv-status-message" dangerouslySetInnerHTML={{ __html: message }} />
        <p className="zvv-status-timestamp">{timestamp}</p>
      </div>
    </div>
  )
}

// Component to display all status notifications
export function AllZVVStatuses() {
  return (
    <div className="zvv-container">
      <h1 className="zvv-heading">System Status</h1>
      <ZVVStatus type="operational" />
      <ZVVStatus type="degraded" />
      <ZVVStatus type="partial_outage" />
      <ZVVStatus type="major_outage" />
      <ZVVStatus type="maintenance" />
    </div>
  )
}
