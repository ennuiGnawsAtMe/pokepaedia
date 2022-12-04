'use client'

import dropdownContext from '../../context/dropdownContext'
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useContext, useEffect } from 'react'
import { capitalise } from '../../utils/helpers'
import { statusOptions } from '../../utils/constants'

const Dropdown = () => {
  const [dropdown, setDropdown] = useContext(dropdownContext)
  const [selected, setSelected] = useState('')
  const [query, setQuery] = useState('')

  // useEffect(() => {
  //   setDisplay(dropdown)
  // }, [dropdown])

  const filteredStatus =
    query === ''
      ? statusOptions
      : statusOptions.filter(option =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="m-2 mb-4 flex h-14 w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="flex w-full">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="h-full w-full border-none py-2 pl-3 pr-10 text-lg leading-5 text-gray-900 focus:ring-0"
              // displayValue={status => status.label}
              onChange={event => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-[50vw] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredStatus.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredStatus.map(option => (
                  <Combobox.Option
                    key={option.label}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? 'bg-gradient-to-r from-blue-900 to-blue-400 text-white'
                          : 'text-gray-900'
                      }`
                    }
                    value={option.label}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default Dropdown
