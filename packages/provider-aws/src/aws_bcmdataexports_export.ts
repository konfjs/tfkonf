import { TerraformConfig, TerraformResource } from "tfs";
export interface DataQuery {
  query_statement: string;
  table_configurations?: {
    [key: string]: any;
  };
}
export interface S3OutputConfigurations {
  compression: string;
  format: string;
  output_type: string;
  overwrite: string;
}
export interface S3Destination {
  s3_bucket: string;
  s3_prefix: string;
  s3_region: string;
  s3_output_configurations: S3OutputConfigurations;
}
export interface DestinationConfigurations {
  s3_destination: S3Destination;
}
export interface RefreshCadence {
  frequency: string;
}
export interface Export {
  description?: string;
  name: string;
  data_query: DataQuery;
  destination_configurations: DestinationConfigurations;
  refresh_cadence: RefreshCadence;
}
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsBcmdataexportsExportArgs {
  tags?: {
    [key: string]: string;
  };
  export: Export;
  timeouts: Timeouts;
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