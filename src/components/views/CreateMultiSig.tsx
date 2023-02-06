import React, { useState, useEffect } from 'react'
import { Center, VStack, Text } from '@chakra-ui/react'
import { useAccount } from 'wagmi'

import BigCard from '../cards/BigCard'
import CreateMultiSigForm from '../forms/CreateMultiSigForm'

const CreateMultiSig: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const { isConnected, address } = useAccount()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted || !isConnected || address === undefined) {
    return null
  }

  return (
    <Center>
      <BigCard w='70vw' h='80vh'>
        <Center>
          <VStack>
            <Text fontSize='2xl' fontWeight='bold' color='white' pb='1rem'>
              Create your multiSig
            </Text>
            <CreateMultiSigForm owner01={address.toString()} />
          </VStack>
        </Center>
      </BigCard>
    </Center>
  )
}

export default CreateMultiSig
