import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBcmdataexportsExportArgsexportDataQuery {
  query_statement: string;
  table_configurations?: {
    [key: string]: any;
  };
}
export interface AwsBcmdataexportsExportArgsexportDestinationConfigurationsS3DestinationS3OutputConfigurations {
  compression: string;
  format: string;
  output_type: string;
  overwrite: string;
}
export interface AwsBcmdataexportsExportArgsexportDestinationConfigurationsS3Destination {
  s3_bucket: string;
  s3_prefix: string;
  s3_region: string;
  s3_output_configurations: AwsBcmdataexportsExportArgsexportDestinationConfigurationsS3DestinationS3OutputConfigurations;
}
export interface AwsBcmdataexportsExportArgsexportDestinationConfigurations {
  s3_destination: AwsBcmdataexportsExportArgsexportDestinationConfigurationsS3Destination;
}
export interface AwsBcmdataexportsExportArgsexportRefreshCadence {
  frequency: string;
}
export interface AwsBcmdataexportsExportArgsexport {
  description?: string;
  name: string;
  data_query: AwsBcmdataexportsExportArgsexportDataQuery;
  destination_configurations: AwsBcmdataexportsExportArgsexportDestinationConfigurations;
  refresh_cadence: AwsBcmdataexportsExportArgsexportRefreshCadence;
}
export interface AwsBcmdataexportsExportArgstimeouts {
  create?: string;
  update?: string;
}
export interface AwsBcmdataexportsExportArgs {
  tags?: {
    [key: string]: string;
  };
  export: AwsBcmdataexportsExportArgsexport;
  timeouts: AwsBcmdataexportsExportArgstimeouts;
}
export class aws_bcmdataexports_export extends TerraformResource {
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBcmdataexportsExportArgs) {
    super(config, "resource", args, resourceName, "aws_bcmdataexports_export");
  }
}