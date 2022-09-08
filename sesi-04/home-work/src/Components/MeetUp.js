import { Box, HStack, Image, Stack, Text, Button, Link, useColorModeValue } from "@chakra-ui/react";
import PropTypes from 'prop-types';
function NavLink() {
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={this.props.link}>
            {this.props.children}
        </Link>

    )
}

export default NavLink
NavLink.propTypes = {
    name: PropTypes.string
}