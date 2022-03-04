import {
    Box, Stack, Image, Heading, HStack, Text, Divider, Spacer, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Flex,
} from "@chakra-ui/react";
import Nav from "../components/Nav";


export default function Country() {
    return (
        <Box as={'section'}>
            <Nav />
            <Stack mt={10} w={'full'} direction={'row'} >
                <Flex mx={5} direction={'column'} alignItems='center' justifyContent={'center'} flex={1} shadow='md' h='30%' >
                    <Image src={'/country/india.png'}></Image>
                    <Heading mt={5}>India</Heading>
                    <Text>Asia</Text>
                    <HStack mt={6}>

                        <Flex direction={'column'} justifyContent='center' alignItems={'center'}>
                            <Heading size={'md'} >1,439,323,77</Heading>
                            <Text>Population</Text>
                        </Flex>
                        <Spacer />
                        <Flex direction={'column'} justifyContent='center' alignItems={'center'}>
                            <Heading size={'md'} >222,323,77</Heading>
                            <Text>Area(Km)</Text>
                        </Flex>
                    </HStack>
                </Flex>

                <Box shadow={'md'} direction={'column'} flex={2}  px={10}>
                    <Heading size={'md'}> Details </Heading>
                    <Divider />
                    <HStack mt={5}> <Text color='gray.500'>Capital</Text> <Spacer /> <Heading size={'md'} > New Delhi </Heading> </HStack>
                    <Divider h={2} />
                    <HStack mt={5}> <Text color='gray.500'>Subregion</Text> <Spacer /> <Heading size={'md'} > South Asia </Heading> </HStack>
                    <Divider h={2} />
                    <HStack mt={5}> <Text color='gray.500' >Languages</Text> <Spacer /> <Heading size={'md'} > Hindi and English </Heading> </HStack>
                    <Divider h={2} />
                    <HStack mt={5}> <Text color='gray.500'>Currencies</Text> <Spacer /> <Heading size={'md'} > India Rupee </Heading> </HStack>
                    <Divider h={2} />
                    <HStack mt={5}> <Text color='gray.500'>Native Name</Text> <Spacer /> <Heading size={'md'} > India </Heading>
                    </HStack>

                    <HStack mt={5}> <Text color='gray.500'>Gini</Text> <Spacer />  <Flex>
                        <Slider aria-label='slider-ex-1' value={40} mx={5} >
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                        {/* <Spacer /> */}
                        <Text>40%</Text>

                    </Flex>

                    </HStack>
                    <Divider h={2} />

                    <Text mt={7} color='gray.500'>Neighbouring Countries</Text>
                    <HStack justifyContent={'flex-start'} alignItems='flex-start' mt={5} >
                        <Box mx={-13} w={'20%'}>
                            <Image src={'/country/india.png'} w={'40%'} ></Image>
                            <Text>India</Text>
                        </Box>
                        <Box w={'20%'}>
                            <Image src={'/country/india.png'} w={'40%'}></Image>
                            <Text>India</Text>
                        </Box>
                    </HStack>


                </Box>
            </Stack>
        </Box>
    )
}
