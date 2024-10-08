import Breadcrumb from "../components/Breadcrumb";
import Header from "../components/Header";
import React from "react";
import {
  FaSortUp,
  FaSortDown,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa6";
import {
  useTable,
  useSortBy,
  usePagination,
} from "react-table/dist/react-table.development";
import newsData from "../newsData";

const News = () => {
  const data = React.useMemo(() => newsData, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        disableSortBy: false,
      },
      {
        Header: "Article",
        accessor: "article-name",
        Cell: ({ row }) => (
          <a href={row.original.link} className="text-blue-300 hover:underline">
            {row.original["article-name"]}
          </a>
        ),
        disableSortBy: true,
      },
      {
        Header: "Date",
        accessor: "date",
        disableSortBy: true,
      },
      {
        Header: "Year",
        accessor: "year",
        disableSortBy: false,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    gotoPage,
    previousPage,
    nextPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="bg-bgColor min-h-screen flex flex-col gap-[2rem] md:gap-[4rem] justify-center items-center py-[2rem] px-[4rem]">
      <Breadcrumb />
      <Header
        headerName="News"
        pageDesc="The News page provides a curated list of articles and updates featuring AMAND Pune, showcasing its latest activities, initiatives, and media coverage."
      />
      <div className="w-full max-w-4xl">
        {/* Table container */}
        <div className="w-full">
          <table
            {...getTableProps()}
            className="w-full bg-white shadow-md rounded-lg overflow-hidden"
          >
            <thead className="font-mont font-semibold">
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  key={headerGroup.id}
                  className="bg-primary text-textColor"
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={column.id}
                      className="text-left tracking-wider px-2 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-3 md:text-base font-medium"
                    >
                      {/* Use flex to align text and icon on the same line */}
                      <div className="flex items-center">
                        {column.render("Header")}
                        <span className="ml-1">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <FaSortDown />
                            ) : (
                              <FaSortUp />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="divide-y font-charter divide-gray-200"
            >
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    key={row.id}
                    className="hover:bg-secondary"
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        key={cell.column.id}
                        className="px-2 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-3 md:text-base"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination Display */}
        <div className="pagination flex flex-col md:flex-row font-mont items-center justify-between mt-4">
          <div>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="md:px-4 md:py-2 px-2 py-1 bg-primary text-textColor rounded-lg mr-2 disabled:opacity-50"
            >
              {<FaAngleLeft />}
            </button>
            <span className="text-textColor">
              Page <strong>{pageIndex + 1}</strong> of{" "}
              {Math.ceil(data.length / pageSize)}
            </span>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="md:px-4 md:py-2 px-2 py-1 bg-primary text-textColor rounded-lg ml-2 disabled:opacity-50"
            >
              {<FaAngleRight />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
