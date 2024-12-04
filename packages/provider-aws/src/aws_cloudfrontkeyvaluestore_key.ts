import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontkeyvaluestoreKeyArgs {
  key: string;
  key_value_store_arn: string;
  value: string;
}

export class aws_cloudfrontkeyvaluestore_key extends TerraformResource {
  readonly id!: string;
  readonly total_size_in_bytes!: number;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontkeyvaluestoreKeyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfrontkeyvaluestore_key");
  }
}
