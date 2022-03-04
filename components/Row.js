import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Img,
    Text,
    HStack,
    Input,
   Slider,  
   SliderTrack,
   SliderFilledTrack,
   SliderThumb,
   Flex,
   Spacer
} from '@chakra-ui/react'


export default function Row({ country, image, population, area, name, gini }) {
    // const { population } = country
    // console.log(country.g[Object.keys(country.gini)[0]])
    
  return (   
      <Tbody>
          <Tr bg={'white'}
          transition='all 0.2s ease-in-out'
           _hover={{
             transform: 'scale(1.02)',
             borderBottom: '1px solid #E5E5E5',
          }}>
              <Td><HStack><Img w={'50px'} h='37px' src={'image'}></Img> <Text>{country.name.common}</Text>
                  </HStack></Td>
                    <Td>{country.population}</Td>
                    <Td> { country.area } </Td>
              <Td>
                  <Flex> 
                      <Slider aria-label='slider-ex-1' value={gini = country.gini?.[Object.keys(country.gini)[0]] } colorScheme='teal' mx={5} >
                      <SliderTrack>
                          <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                  </Slider>
                  <Spacer/>
                      <Text> { country.gini?.[Object.keys(country.gini)[0]]}%</Text>
                      
                       </Flex>
               </Td>
              </Tr>
             
          </Tbody>
     
  )
}

