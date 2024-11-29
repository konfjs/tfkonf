import { TerraformConfig, TerraformResource } from "tfs";
export interface InputRecordTables {
  catalog_id?: string;
  connection_name?: string;
  database_name: string;
  table_name: string;
}
export interface FindMatchesParameters {
  accuracy_cost_trade_off?: number;
  enforce_provided_labels?: boolean;
  precision_recall_trade_off?: number;
  primary_key_column_name?: string;
}
export interface Parameters {
  transform_type: string;
  find_matches_parameters: FindMatchesParameters;
}
export interface AwsGlueMlTransformArgs {
  description?: string;
  max_retries?: number;
  name: string;
  number_of_workers?: number;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  timeout?: number;
  worker_type?: string;
  input_record_tables: InputRecordTables;
  parameters: Parameters;
}
export class aws_glue_ml_transform extends TerraformResource {
  readonly arn!: string;
  readonly glue_version?: string;
  readonly id?: string;
  readonly label_count!: number;
  readonly max_capacity?: number;
  readonly schema!: any[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueMlTransformArgs) {
    super(config, "resource", args, resourceName, "aws_glue_ml_transform");
  }
}