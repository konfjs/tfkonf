import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsQuicksightIngestionArgs {
  data_set_id: string;
  ingestion_id: string;
  ingestion_type: string;
}
export class aws_quicksight_ingestion extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly id!: string;
  readonly ingestion_status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightIngestionArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_ingestion");
  }
}