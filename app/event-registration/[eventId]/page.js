import EventRegistrationForm from "@/components/EventRegistrationForm";
import graphQlApi from "@/lib/graphQlApi";
const ActivityPage = async ({ params }) => {

  const { events: [ event ] } = await graphQlApi(`
    query Events($eventId: String!){
      events(filter: { id: { _eq: $eventId }}){
        id
        event_name
      }
    }
  `,{
      variables: {
        eventId: params.eventId
      }
    })

  return (
    <main className="grid grid-cols-1">
      <div className="container mx-auto max-w-3xl py-4">
        <EventRegistrationForm eventId={event.id} eventName={event.event_name}  />
      </div>
    </main>
  )
}

export  default ActivityPage
