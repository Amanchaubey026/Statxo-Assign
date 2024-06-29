/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { 
  Box, 
  Table, 
  Thead, 
  Tbody, 
  Tr, 
  Th, 
  Td, 
  Select, 
  useToast, 
  Skeleton, 
  Stack,
} from '@chakra-ui/react';
import axios from 'axios';

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks/task');
        setTasks(response.data.data || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleEdit = async (taskId, field, value) => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      toast({
        title: "Authentication Error",
        description: "You need to be logged in to perform this action.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const task = tasks.find(task => task._id === taskId);
      const requestBody = {
        ActionType: field === 'ActionType' ? value : task.ActionType,
        ActionName: field === 'ActionName' ? value : task.ActionName,
      };

      const config = {
        headers: { Authorization: `Bearer ${authToken}` }
      };

      const response = await axios.patch(`http://localhost:5000/tasks/update/${taskId}`, requestBody, config);

      toast({
        title: "Task Updated",
        description: "The task has been updated successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setTasks(tasks.map(task => task._id === taskId ? { ...task, [field]: value } : task));
    } catch (error) {
      console.error('Edit error', error);
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Status:', error.response.status);
      console.error('Error Response Headers:', error.response.headers);
      toast({
        title: "Update Failed",
        description: error.response?.data?.message || "There was an error updating the task.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return (
      <Stack spacing={4}>
        {[...Array(6)].map((_, i) => (
          <Skeleton height="40px" key={i} />
        ))}
      </Stack>
    );
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  return (
    <Box overflowX="auto" py={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Quantity</Th>
            <Th>Amount</Th>
            <Th>Posting Year</Th>
            <Th>Posting Month</Th>
            <Th>Action Type</Th>
            <Th>Action Name</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task) => (
            <Tr key={task._id}>
              <Td>{task.Quantity}</Td>
              <Td>{task.Amount}</Td>
              <Td>{task.PostingYear}</Td>
              <Td>{task.PostingMonth}</Td>
              <Td>
                <Select
                  value={task.ActionType}
                  onChange={(e) => handleEdit(task._id, 'ActionType', e.target.value)}
                >
                  <option value="Price-Negotiation">Price-Negotiation</option>
                  <option value="Scrap">Scrap</option>
                  <option value="Product ERP">Product ERP</option>
                  <option value="Price Non ERP">Price Non ERP</option>
                </Select>
              </Td>
              <Td>
                <Select
                  value={task.ActionName}
                  onChange={(e) => handleEdit(task._id, 'ActionName', e.target.value)}
                >
                  <option value="Rebate">Rebate</option>
                  <option value="Refund">Refund</option>
                  <option value="Price Increase">Price Increase</option>
                  <option value="Additional Task">Additional Task</option>
                  <option value="Price Decrease">Price Decrease</option>
                </Select>
              </Td>
              <Td>{task.Status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TaskTable;
