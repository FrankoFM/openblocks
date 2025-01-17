import { DatasourceType } from "@openblocks-ee/constants/queryConstants";
import { DatasourceConfigType } from "../api/datasourceApi";

export const databasePlugins: Partial<DatasourceType>[] = [
  "mysql",
  "mongodb",
  "postgres",
  "redis",
  "es",
  "mssql",
  "oracle",
  "clickHouse",
  "googleSheets",
];

export const apiPluginsForQueryLibrary: Partial<DatasourceType>[] = ["restApi", "smtp"];

export const apiPlugins: Partial<DatasourceType>[] = [...apiPluginsForQueryLibrary];

export interface Datasource {
  id: string;
  name: string;
  type: DatasourceType;
  organizationId: string;
  datasourceConfig: DatasourceConfigType;
  // USER_CREATED(0):  user self create
  // SYSTEM_TEMPLATE(1) for example: onboard datasource、template datasource
  // SYSTEM_PREDEFINED(2) for example: rest api empty datasource
  creationSource: 0 | 1 | 2;
  createTime: number;
}
