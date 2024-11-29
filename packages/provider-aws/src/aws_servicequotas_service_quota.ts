import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsServicequotasServiceQuotaArgs {
  quota_code: string;
  service_code: string;
  value: number;
}
export class aws_servicequotas_service_quota extends TerraformResource {
  readonly adjustable!: boolean;
  readonly arn!: string;
  readonly default_value!: number;
  readonly id?: string;
  readonly quota_name!: string;
  readonly request_id!: string;
  readonly request_status!: string;
  readonly service_name!: string;
  readonly usage_metric!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicequotasServiceQuotaArgs) {
    super(config, "resource", args, resourceName, "aws_servicequotas_service_quota");
  }
}