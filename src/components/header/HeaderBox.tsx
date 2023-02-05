import Link from 'next/link'
import React from 'react'
import { Box, HStack, Text, useMediaQuery, Menu, MenuButton, Button, MenuList, MenuItem, Image } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const HeaderBox: React.FC = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  const menu = [
    {
      name: 'Create a MultiSig',
      link: '/createMultiSig',
    },
    {
      name: 'Use your MultiSig',
      link: '/useYourMultiSig',
    },
    {
      name: 'Integration',
      link: '/integration',
    },
  ]

  return (
    <Box
      w='70vw'
      h='100%'
      p={4}
      m={2}
      mt={4}
      borderRadius={10}
      boxShadow='dark-lg'
      bgGradient='linear(to-r, cyan.300, cyan.600, purple.300)'>
      <HStack>
        <Link href='/'>
          <HStack>
            <Image src='/icons/android-icon-512x512.png' alt='MyMultiSig Logo' h='2rem' />
            <Text
              fontSize='lg'
              fontWeight='bold'
              color='white'
              _hover={{
                color: 'cyan.900',
              }}>
              MyMultiSig.app
            </Text>
          </HStack>
        </Link>
        {isLargerThan800 ? (
          <>
            {menu.map((item) => (
              <Link key={`Link-${item.link}`} href={item.link}>
                <Text
                  key={`LinkText-${item.link}`}
                  fontSize='lg'
                  fontWeight='bold'
                  color='white'
                  pl='1rem'
                  _hover={{
                    color: 'cyan.900',
                  }}>
                  {item.name}
                </Text>
              </Link>
            ))}
          </>
        ) : (
          <Box ml='2rem'>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                color={'white'}
                bg='transparent'
                _focus={{
                  outline: 'none',
                  color: 'cyan.600',
                }}
                _active={{
                  outline: 'none',
                  color: 'cyan.600',
                }}>
                Menu
              </MenuButton>
              <MenuList bg='cyan.200'>
                {menu.map((item) => (
                  <MenuItem key={`MenuItem-${item.link}`} bg='cyan.100' color='cyan.900'>
                    <Link key={`Link-${item.link}`} href={item.link}>
                      <Text
                        key={`LinkText-${item.link}`}
                        fontSize='lg'
                        fontWeight='bold'
                        color='cyan.900'
                        pl='1rem'
                        _hover={{
                          color: 'cyan.600',
                        }}>
                        {item.name}
                      </Text>
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        )}
      </HStack>
    </Box>
  )
}

export default HeaderBox
