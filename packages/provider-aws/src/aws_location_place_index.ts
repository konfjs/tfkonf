import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLocationPlaceIndexArgsDataSourceConfiguration {
  intended_use?: string;
}
export interface AwsLocationPlaceIndexArgs {
  data_source: string;
  description?: string;
  index_name: string;
  tags?: {
    [key: string]: string;
  };
  data_source_configuration: AwsLocationPlaceIndexArgsDataSourceConfiguration;
}
export class aws_location_place_index extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly index_arn!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLocationPlaceIndexArgs) {
    super(config, "resource", args, resourceName, "aws_location_place_index");
  }
}