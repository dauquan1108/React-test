import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import BaseModal from "../Shared/BaseModal";
import InputSearch from "./InputSearch";
import { INPostsManagementData, INExtendModalPost } from "../Type";

const paginationModel = { page: 0, pageSize: 10 };

function PostsManagement() {
  const [extendModal, setExtendModal] = useState<INExtendModalPost>({
    open: false,
    content: "",
  });

  const [loading, setLoading] = useState<boolean>(true);

  const [data, setData] = useState<INPostsManagementData[]>([]);

  const [rows, setRows] = useState<INPostsManagementData[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setRows(result);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(
          "[ERROR] Call API get data PostsManagement bị lỗi: ",
          error
        );
      });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      type: "number",
      width: 200,
      sortable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "userId",
      type: "number",
      headerName: "User ID",
      width: 240,
      align: "center",
      headerAlign: "center",
    },
    { field: "title", headerName: "Title", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <strong>
          <Button
            title="Edit"
            size="medium"
            sx={{ mr: 2 }}
            variant="contained"
            onClick={(event) => {
              event.stopPropagation();
              handleAction(params.row);
            }}
          >
            <ModeEditIcon />
          </Button>
          <Button
            size="medium"
            title="Delete"
            variant="contained"
            onClick={(event) => {
              event.stopPropagation();
              handleAction(params.row);
            }}
            sx={{ backgroundColor: "red" }}
          >
            <DeleteIcon />
          </Button>
        </strong>
      ),
    },
  ];

  const handleAction = (row: INPostsManagementData) => {
    console.log(row);
    handleUpdateModal(
      true,
      "The edit and delete function will be updated in the next version."
    );
  };

  const handleRowClick = (row: INPostsManagementData) => {
    handleUpdateModal(true, JSON.stringify(row));
  };

  const handleSearch = (keyWord: string) => {
    const filteredData = data.filter(
      (item) =>
        item.id.toString().includes(keyWord) ||
        item.userId.toString().includes(keyWord) ||
        item.title.toLowerCase().includes(keyWord.toLowerCase())
    );
    setRows(filteredData);
  };

  const handleUpdateModal = (status: boolean, content: string) => {
    setExtendModal({ open: status, content });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" color="#115BB2">
        Users Management
      </Typography>
      <Box sx={{ m: 4, height: "80%" }}>
        <InputSearch onSearch={handleSearch} />
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          disableColumnResize
          disableColumnMenu={true}
          pageSizeOptions={[10, 20, 30, 40]}
          initialState={{ pagination: { paginationModel } }}
          onRowClick={(params) => handleRowClick(params.row)}
          sx={{
            border: 1,
            borderColor: "#EFEFEF",
            width: "1200px",
            "& .MuiDataGrid-columnHeaders": {
              color: "#4B9EE3",
              fontSize: "15px",
            },
            "& .MuiDataGrid-selectedRowCount": {
              opacity: 0,
            },
          }}
        />
      </Box>

      <BaseModal
        open={extendModal.open}
        content={extendModal.content}
        onClose={() => handleUpdateModal(false, "")}
      />
    </Box>
  );
}

export default PostsManagement;
