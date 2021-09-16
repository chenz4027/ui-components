/* Copyright Contributors to the Open Cluster Management project */

import React from 'react'
import { Card, CardBody } from '@patternfly/react-core'
import { ExternalLinkAltIcon } from '@patternfly/react-icons'
import { AcmDropdown } from './AcmDropdown'

export default {
    title: 'Dropdown',
    component: AcmDropdown,
    argTypes: {
        isDisabled: { control: 'boolean' },
        text: { type: 'string' },
        tooltip: { type: 'string' },
        isKebab: { control: 'boolean' },
    },
}

export const Dropdown = (args) => {
    const dropdownItems = [
        { id: 'install-config', text: 'Install config' },
        { id: 'kubeconfig', text: 'Kubeconfig' },
        { id: 'other-config', text: 'Other config', isDisabled: true, tooltip: 'Forbidden' },
        { id: 'launch-out', text: 'Launch page', icon: <ExternalLinkAltIcon /> },
        { id: 'link item', text: 'Link item', href: 'www.google.com', component: 'a' },
        { id: 'new-feature', text: 'New feature', label: 'Technology Preview', labelColor: 'blue'}
    ]
    const onSelect = (id: string) => alert(`clicked: ${id}`)
    return (
        <Card>
            <CardBody style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '50px' }}>
                <AcmDropdown
                    isDisabled={args.isDisabled}
                    tooltip={args.tooltip}
                    id="dropdown"
                    onSelect={onSelect}
                    text={args.text}
                    dropdownItems={dropdownItems}
                    isKebab={args.isKebab}
                    isPlain={true}
                    isPrimary={true}
                />
            </CardBody>
        </Card>
    )
}
Dropdown.args = { isDisabled: false, tooltip: 'Default tooltip', text: 'Download configuration', isKebab: false }
