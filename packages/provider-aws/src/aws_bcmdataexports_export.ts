import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBcmdataexportsExportArgsExportDataQuery {
  query_statement: string;
  table_configurations?: { [key: string]: any };
}

export interface AwsBcmdataexportsExportArgsExportDestinationConfigurationsS3DestinationS3OutputConfigurations {
  compression: string;
  format: string;
  output_type: string;
  overwrite: string;
}

export interface AwsBcmdataexportsExportArgsExportDestinationConfigurationsS3Destination {
  s3_bucket: string;
  s3_prefix: string;
  s3_region: string;
  s3_output_configurations: AwsBcmdataexportsExportArgsExportDestinationConfigurationsS3DestinationS3OutputConfigurations;
}

export interface AwsBcmdataexportsExportArgsExportDestinationConfigurations {
  s3_destination: AwsBcmdataexportsExportArgsExportDestinationConfigurationsS3Destination;
}

export interface AwsBcmdataexportsExportArgsExportRefreshCadence {
  frequency: string;
}

export interface AwsBcmdataexportsExportArgsExport {
  description?: string;
  name: string;
  data_query: AwsBcmdataexportsExportArgsExportDataQuery;
  destination_configurations: AwsBcmdataexportsExportArgsExportDestinationConfigurations;
  refresh_cadence: AwsBcmdataexportsExportArgsExportRefreshCadence;
}

export interface AwsBcmdataexportsExportArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsBcmdataexportsExportArgs {
  tags?: { [key: string]: string };
  export: AwsBcmdataexportsExportArgsExport;
  timeouts?: AwsBcmdataexportsExportArgsTimeouts;
}

export class aws_bcmdataexports_export extends TerraformResource {
  readonly id!: string;
  readonly tags_all!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsBcmdataexportsExportArgs) {
    super(config, "resource", args, resourceName, "aws_bcmdataexports_export");
  }
}
