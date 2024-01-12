import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import Sections from './topics'

const topics = ['Essay', 'Review', 'Article', 'Email', 'Report']

function Writing () {
  return (
    <Tabs
      position='relative'
      variant='unstyled'
      align='center'
      fontWeight='bold'
    >
      <TabList>
        {topics.map(topic => (
          <Tab key={topic} _selected={{ color: '#d97706' }}>{topic}</Tab>
        ))}
      </TabList>
      <TabIndicator
        mt='-1.5px'
        height='2px'
        bg='prim'
        borderRadius='1px'
      />
      <TabPanels>
        {topics.map(topic => (
          <TabPanel key={topic}>
            <Sections topic={topic} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default Writing
