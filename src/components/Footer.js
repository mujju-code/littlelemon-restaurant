import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box py={10}>
            <Flex
                direction="column"
                align="center"
                justify="center"
                maxW="6xl"
                mx="auto"
            >
                <Image
                    src="https://ci5.googleusercontent.com/proxy/VhsxBhEb__Ys3pvAgcxM51KahKsyAqknRKDg0UCKme0e1v8yIqRLH5yw-7PkxPoL60CG6OZO_5qw0qvY8K0wD-pT1WJ-MXZPvxCe8QiQE0ygxRn_mPI4JNq4_nwrvsFIKgOgz1AOI857A98NmubHmShDIJgqn3wD=s0-d-e1-ft#https://dynamic.brandcrowd.com/preview/logodraft/0588c39a-d6f2-497f-b8e2-07e46309ce50/image/large.png"
                    alt="Logo"
                    boxSize="50px"
                    mb={4}
                />

                <Text mb={2}>123 Main Street, City</Text>
                <Text mb={2}>Phone: 123-456-7890</Text>

                <Flex>
                    <Link href="https://www.facebook.com" mr={2}>
                        <Image
                            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
                            alt="Facebook"
                            boxSize="20px"
                        />
                    </Link>
                    <Link href="https://www.instagram.com">
                        <Image
                            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
                            alt="Instagram"
                            boxSize="20px"
                        />
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
