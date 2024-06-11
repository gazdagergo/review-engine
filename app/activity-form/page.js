import ActivityForm from "@/components/ActivityForm";
import graphQlApi from "@/lib/graphQlApi";
const ActivityPage = async (params) => {

  let members = {}
      try {
      ;({ members } = await graphQlApi(`
        query($memberSlug: String!){
            members(filter: { slug: { _eq: $memberSlug }}) {
                member_name
                id
            }
        }
      `, {
        variables: {
          "memberSlug": params.searchParams.member
        }
      }))
    } catch (error){

  }


  return (
    <main className="grid grid-cols-1">
      <div className="container mx-auto max-w-3xl py-4">
        <ActivityForm memberName={members?.[0]?.member_name} memberId={members?.[0]?.id} />
      </div>
    </main>
  )
}

export  default ActivityPage
