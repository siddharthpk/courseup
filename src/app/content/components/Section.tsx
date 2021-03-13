import { Box, Heading } from '@chakra-ui/layout';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

import { MeetingTimes, Seat } from '../../../fetchers';

import { Schedule } from './Schedule';
import { SeatInfo } from './Seats';

export interface SectionInfoProps {
  /**
   * course registration number
   */
  crn: string;
  /**
   * section type
   * example: one of lecture, lab, tutorial
   */
  section: string;
  /**
   * section code
   * example: A01, B01, T01 etc.
   */
  sectionCode: string;
  /**
   * instructional method of the section
   * example: face-to-face, online etc.
   */
  instructionalMethod: string;
  /**
   * addtional notes
   */
  additionalNotes?: string;
  /**
   * Array of MeetingTimes, which hold meeting time like every monday at 12:30 pm
   * and also days and instructor info.
   */
  meetingTimes: MeetingTimes[];
  /**
   * current capacity of a section, waitlist and current enrollment numbers.
   */
  seat?: Seat;
}

export function SectionInfo({
  crn,
  sectionCode,
  instructionalMethod,
  additionalNotes,
  seat,
  meetingTimes,
}: SectionInfoProps): JSX.Element {
  const isASYNC = additionalNotes?.indexOf('asynchronous') !== -1;
  const isSENG = additionalNotes?.indexOf('Reserved for BSENG students') !== -1;
  const isCSC = additionalNotes?.indexOf('Reserved for students in a Computer Science program') !== -1;

  return (
    <Box as="section" bg="white" color="black" my="5" boxShadow="lg" p="5" borderRadius="xl">
      <Flex my="2" alignItems="center" p="md" justifyContent="space-between">
        <Flex>
          <Heading size="lg" as="h2" whiteSpace="pre">
            {sectionCode}
          </Heading>
          <Flex mx="5" alignItems="center">
            <Popover>
              <PopoverTrigger>
                <Badge colorScheme="green" mx="1">
                  {instructionalMethod}
                </Badge>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>This means this section takes place online.</PopoverBody>
              </PopoverContent>
            </Popover>
            {isASYNC && (
              <Badge colorScheme="cyan" mx="1">
                Asynchronous
              </Badge>
            )}
            {isSENG && (
              <Badge colorScheme="orange" mx="1">
                SENG ONLY
              </Badge>
            )}
            {isCSC && (
              <Badge colorScheme="yellow" mx="1">
                CSC ONLY
              </Badge>
            )}
          </Flex>
        </Flex>
        <Box>
          <Stat>
            <StatLabel fontSize="sm">CRN</StatLabel>
            <StatNumber fontSize="md">{crn}</StatNumber>
          </Stat>
        </Box>
      </Flex>
      <Box>
        {additionalNotes && (
          <Accordion allowToggle my="3">
            <AccordionItem>
              <Heading as="h2">
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Addtional Notes
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>{additionalNotes}</AccordionPanel>
            </AccordionItem>
          </Accordion>
        )}
        <Schedule meetingTimes={meetingTimes} />
        <Box my="5">
          <SeatInfo seat={seat} />
        </Box>
      </Box>
    </Box>
  );
}
