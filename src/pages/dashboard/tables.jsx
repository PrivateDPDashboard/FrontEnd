import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";

export function Tables() {
  const navigate = useNavigate(); 
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      {/* Clients List Table */}
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-8 p-6 flex justify-between items-center"
        >
          <Typography variant="h6" color="pinkwhite">
            Clients List
          </Typography>
          <button
            onClick={() => navigate("/Add-Customer")}
            className="rounded-md bg-pink-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <div className="flex items-center gap-2">Add new Customer</div>
          </button>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2">
          <div className="overflow-auto max-h-[400px]">
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  {["Client Name", "Location", "Remaining Days", "Valid Until", ""].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-bold uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {authorsTableData.map(
                  ({ img, name, email, job, remaining, date }, key) => {
                    const className = `py-3 px-5 ${
                      key === authorsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar
                              src={img}
                              alt={name}
                              size="sm"
                              variant="rounded"
                            />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {name}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">
                                {email}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {job[0]}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {job[1]}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Chip
                            variant="gradient"
                            color={remaining ? "green" : "blue-gray"}
                            value={remaining ? "1 Month" : "2 days"}
                            className="py-0.5 px-2 text-[11px] font-medium w-fit"
                          />
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {date}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            Edit
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>

      {/* Countries Table */}
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-8 p-6 flex justify-between items-center"
        >
          <Typography variant="h6" color="white">
            Countries Table
          </Typography>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2">
          <div className="overflow-auto max-h-[400px]">
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  {["Country Name", "Clients Members", "Total", "Target"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "gray"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
