import { TerraformConfig, TerraformResource } from "tfs";
export interface ReservationPlanSettings {
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
  reservation_plan_settings: ReservationPlanSettings;
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