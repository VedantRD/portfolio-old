import React from 'react'
import { Paragraph } from '../../styledComponents/Descriptions'
import { Tab, Tabs } from '../../utility/Tabs'

const Education = () => {
    return (
        <Tabs>
            <Tab label="Engineering">
                <Paragraph>
                    College : MGM's College Of Engineering, Nanded
                </Paragraph>
                <Paragraph>
                    July 2017 - Present
                </Paragraph>
                <Paragraph>
                    CGPA : 8.46
                </Paragraph>
                <Paragraph>
                    Branch : Computer Science
                </Paragraph>
            </Tab>
            <Tab label="HSC">
                <Paragraph>
                    College : Yeshwant Mahavidyalaya, Nanded
                </Paragraph>
                <Paragraph>
                    June 2015 - March 2017
                </Paragraph>
                <Paragraph>
                    Percentage : 78.5%
                </Paragraph>
            </Tab>
            <Tab label="SSC">
                <Paragraph>
                    School : Mahatma Phule Highschool, Nanded
                </Paragraph>
                <Paragraph>
                    June 2005 - February 2015
                </Paragraph>
                <Paragraph>
                    Percentage : 90.6%
                </Paragraph>
            </Tab>
        </Tabs>
    )
}

export default Education
