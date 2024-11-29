import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppfabricIngestionArgs {
  app: string;
  app_bundle_arn: string;
  ingestion_type: string;
  tags?: {
    [key: string]: string;
  };
  tenant_id: string;
}
export class aws_appfabric_ingestion extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppfabricIngestionArgs) {
    super(config, "resource", args, resourceName, "aws_appfabric_ingestion");
  }
}