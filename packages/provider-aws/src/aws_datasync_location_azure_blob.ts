import { TerraformConfig, TerraformResource } from "tfs";
export interface SasConfiguration {
  token: string;
}
export interface AwsDatasyncLocationAzureBlobArgs {
  access_tier?: string;
  agent_arns: string[];
  authentication_type: string;
  blob_type?: string;
  container_url: string;
  tags?: {
    [key: string]: string;
  };
  sas_configuration: SasConfiguration;
}
export class aws_datasync_location_azure_blob extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly subdirectory?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly uri!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationAzureBlobArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_azure_blob");
  }
}