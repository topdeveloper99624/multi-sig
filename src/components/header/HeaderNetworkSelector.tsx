import React, { useState, useEffect } from 'react'
import { Box, Text, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useNetwork, useSwitchNetwork } from 'wagmi'

const HeaderNetworkSelector: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const { chain } = useNetwork()
  const { chains, switchNetwork } = useSwitchNetwork()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted || !chain || !chains) return <></>

  return (
    <Box ml='2rem'>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          color={'white'}
          bg='transparent'
          border={'1px solid transparent'}
          _hover={{
            border: '1px solid white',
            borderRadius: '10px',
            color: 'cyan.900',
          }}
          _focus={{
            outline: 'none',
            background: 'transparent',
            color: 'cyan.900',
            border: '1px solid white',
            borderRadius: '10px',
          }}
          _active={{
            outline: 'none',
            background: 'transparent',
            color: 'cyan.900',
            border: '1px solid white',
            borderRadius: '10px',
          }}>
          {chain.name}
        </MenuButton>
        <MenuList bg='cyan.400'>
          {chains.map((item) => (
            <MenuItem
              key={`MenuItem-${item.name}`}
              bg='cyan.200'
              color='cyan.900'
              onClick={() => switchNetwork !== undefined && switchNetwork(item.id)}>
              <Text
                key={`LinkText-${item.name}`}
                fontSize='lg'
                fontWeight='bold'
                color='cyan.900'
                pl='1rem'
                _hover={{
                  color: 'cyan.600',
                }}>
                {item.name}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
}

export default HeaderNetworkSelector
