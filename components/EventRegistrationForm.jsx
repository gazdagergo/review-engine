'use client'
import {useState} from "react";
import graphQlApi from "@/lib/graphQlApi";
import SuccessMessage from "@/components/SuccessMessage";

const ActivityForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [status, setStatus] = useState(null)

  const handleSubmit = async () => {
    await graphQlApi(`
      mutation($name: String!, $email: String!){
        create_Event_Registration_item(data: {
            participant_email: $email,
            participant_full_name: $name,
            event: "annual-25"
        }){
            id
        }
      }
    `, {
      variables: {
        name: name,
        email: email
      }
    })

    setStatus('success')
    setName('')
    setEmail('')

  }

  return (
    <>
      <h2 className="my-8  text-4xl leading-tight text-primary text-purple font-normal">
        Register for the event
      </h2>

      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="text"
          className="relative m-0 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
          placeholder="Contact name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={({ target }) => setName(target.value)}
          value={name}
        />
      </div>
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="text"
          className="relative m-0 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
          placeholder="Email"
          aria-label="Recipient's email"
          aria-describedby="basic-addon2"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />
      </div>

      <div className="relative flex w-full flex-wrap items-stretch">
        <textarea
          className="relative m-0 block flex-auto rounded-e border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:focus:border-primary"
          aria-label="Activity details"
          placeholder="Activity details"
          defaultValue={""}
        />
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-block rounded bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        >
          Submit activity
        </button>
      </div>

      {status === 'success' && (
        <SuccessMessage className="mt-8 cursor-pointer" onClick={() => setStatus(null)}>
          Activity submitted
        </SuccessMessage>
      )}
    </>


  )
}

export default ActivityForm
