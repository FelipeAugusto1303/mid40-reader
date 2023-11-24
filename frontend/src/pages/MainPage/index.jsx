import React, { useEffect, useState } from "react";
import { getLastTag, getAllTags } from "../../services/rfidService";
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Text,
  Divider,
} from "@chakra-ui/react";
import format from "date-fns/format";

function MainPage() {
  const [lastTag, setLastTag] = useState(null);
  const [tags, setTags] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      getLastTag().then((response) => {
        if (Object.keys(response.data).length > 0) {
          setLastTag(response.data);
        }
      });
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      getAllTags().then((response) => {
        if (response.data.length > 0) {
          setTags(response.data);
        }
      });
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Flex flexDirection="row" h="100vh">
      <Flex
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="10px"
      >
        <Text fontSize="30px" fontWeight={700}>
          ÚLTIMA TAG LIDA
        </Text>
        {lastTag && (
          <Card w="60%" border="1px solid #ccc">
            <CardBody
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text>EPC: {lastTag.epc}</Text>
            </CardBody>
            <CardFooter
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text>
                {format(new Date(lastTag.timestamp), "dd/MM/yyyy - HH:mm:ss")}
              </Text>
            </CardFooter>
          </Card>
        )}
      </Flex>
      <Divider orientation="vertical" />
      <Flex
        w="100%"
        h="100%"
        flexDirection="column"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="30px" fontWeight={700}>
          HISTÓRICO DE TAGS
        </Text>
        {tags &&
          tags
            .sort((a, b) => {
              return new Date(b.timestamp) - new Date(a.timestamp);
            })
            .map((tag) => {
              return (
                <Card w="70%" border="1px solid #ccc">
                  <CardBody
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Text>
                      EPC: {tag.epc} -{" "}
                      {format(new Date(tag.timestamp), "dd/MM/yyyy - HH:mm:ss")}
                    </Text>
                  </CardBody>
                </Card>
              );
            })}
      </Flex>
    </Flex>
  );
}

export default MainPage;
