export default async function graphQlApi(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DIRECTUS_APP_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${process.env.GRAPHQL_BEARER_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}
