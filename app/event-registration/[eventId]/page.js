import EventRegistrationForm from "@/components/EventRegistrationForm";
import graphQlApi from "@/lib/graphQlApi";
const ActivityPage = async () => {

  const { events: [ event ] } = await graphQlApi(`
    query Events{
      events(filter: { id: { _eq: "annual-25"}}){
          id
          event_name
      }
    }
  `)

  console.log(event)

  return (
    <main className="grid grid-cols-1">
      <div className="container mx-auto max-w-3xl py-4">
        <EventRegistrationForm eventId={event.id} eventName={event.event_name}  />
      </div>
    </main>
  )
}

export  default ActivityPage
