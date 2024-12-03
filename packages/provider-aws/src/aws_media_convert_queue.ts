import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsMediaConvertQueueArgsReservationPlanSettings {
  commitment: string;
  renewal_type: string;
  reserved_slots: number;
}
export interface AwsMediaConvertQueueArgs {
  description?: string;
  name: string;
  pricing_plan?: string;
  status?: string;
  tags?: {
    [key: string]: string;
  };
  reservation_plan_settings: AwsMediaConvertQueueArgsReservationPlanSettings;
}
export class aws_media_convert_queue extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMediaConvertQueueArgs) {
    super(config, "resource", args, resourceName, "aws_media_convert_queue");
  }
}