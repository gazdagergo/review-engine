import graphQlApi from "@/lib/graphQlApi";
import DetailedEventRegistrationForm from "@/components/DetailedEventRegistrationForm";
const DetailedRegistrationPage = async ({ params }) => {

  const data = await graphQlApi(`
    query getRegistration($registrationId: ID!, $eventId: ID!){
      event_registration_by_id(id: $registrationId){
        participant_full_name
      }
      events_by_id(id: $eventId){
        event_name
      }
    }
  `, {
    variables: {
      "registrationId": "fe454779-a537-4a3f-a7e0-bb482e8a3a27",
      "eventId": "annual-25"
    }
  })


  return (
    <main className="grid grid-cols-1">
      <div className="container mx-auto max-w-3xl py-4">
        <DetailedEventRegistrationForm
          eventId={params.eventId}
          eventName={data.events_by_id.event_name}
          participantFullName={data.event_registration_by_id.participant_full_name}
        />
      </div>
    </main>
  )
}

export default DetailedRegistrationPage
